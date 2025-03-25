import pyodbc # type: ignore
import pandas as pd # type: ignore

# Path to your MDB file
mdb_path = r"C:\Users\hp\Downloads\Northwind.MDB"

# Output CSV file path
output_csv_path = r"C:\Users\hp\Documents\Northwind_Exported.csv"

# Connection string for MDB file
conn_str = f"DRIVER={{Microsoft Access Driver (*.mdb, *.accdb)}};DBQ={mdb_path};"
conn = pyodbc.connect(conn_str)

# Fetch the list of tables
cursor = conn.cursor()
tables = [row.table_name for row in cursor.tables() if row.table_type == "TABLE"]

# Choose a table to export
target_table = tables[0]  # Change this to the table you want
print(f"Exporting table: {target_table}")

# Query data from the table
query = f"SELECT * FROM {target_table}"
df = pd.read_sql(query, conn)

# Export to CSV
df.to_csv(output_csv_path, index=False)
print(f"Exported {target_table} to {output_csv_path}")
