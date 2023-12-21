<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rectangle Area Calculator</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <?php
        $P = 3.14;
        $radius = 6;
        $Sum = ($radius ** 2) * $P;
    ?>
    <div class="table">
        <table border="2px" align="center" width="500">
            <tr>
                <td colspan="2" align="center" class="title">
                    <big> คำนวณพื้นที่วงกลม </big>
                </td>
            </tr>
            <tr>
                <td>Enter Pi </td>
                <td class="result"><?php echo $P; ?></td>
            </tr>
            <tr>
                <td>Enter Radius </td>
                <td class="result"><?php echo $radius; ?></td>
            </tr>
            <tr>
                <td>Sum  πr2 </td>
                <td class="result"><?php echo $Sum; ?></td>
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
