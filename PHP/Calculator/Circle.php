<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Circle Area Calculator</title>
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
                <td class="text-input"> π </td>
                <td><input type="text" class="result" name="height" value="3.14"></td>
            </tr>
            <tr>
                <td class="text-input">รัศมี</td>
                <td><input type="text" class="result" name="a" value="<?php echo $radius; ?>"></td>
            </tr>
            <tr>
                <td class="text-input">สูตร πr2 </td>
                <td style="text-align: right;"><?php echo $Sum;?></td>
            </tr>
            <tr>
                <td colspan="2" align="center" class="btn">
                    <div class="button-container">
                        <input type="submit" value="คำนวณ">
                        <input type="reset" value="รีเซ็ตค่า">
                        <a href="./index.php" class="back">กลับ</a>
                    </div>
                </td>
            </tr>

        </table>
    </div>
</body>

</html>