<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rectangle Area Calculator</title>
    <link rel="stylesheet" href="test.css">
</head>

<body>
    <?php
        $P = 3.14;
        $R = 6;
        $Sum = ($R ** 2) * $P;
    ?>
    <div class="table">
        <table border="2px" align="center" width="500" class="content">
            <tr>
                <td colspan="2" align="center">
                    <big> คำนวณพื้นที่วงกลม </big>
                </td>
            </tr>
            <tr>
                <td>Enter P : </td>
                <td><input type="text" name="width" size="5" value="<?php echo $P; ?>"/> </td>
            </tr>
            <tr>
                <td>Enter R : </td>
                <td><input type="text" name="height" size="5" value="<?php echo $R; ?>"/></td>
            </tr>
            <tr>
                <td>Sum : </td>
                <td><input type="text" name="sum" size="5" value="<?php echo $Sum; ?>"/></td>
            </tr>
            <tr>
                <td colspan="2" align="center" class="btn">
                    <a href="./index.php">Back</a>
                </td>
            </tr>
        </table>
    </div>
</body>
</html>
