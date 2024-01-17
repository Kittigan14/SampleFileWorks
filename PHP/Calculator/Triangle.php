<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Triangle Area Calculator</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <?php
        $base = 5;
        $height = 3;
        $Sum =  1/2 * ($base * $height);
    ?>
    <table border="2px" align="center" width="500">
        <tr>
            <td colspan="2" align="center" class="title">
                <big> คำนวณพื้นที่สามเหลี่ยม </big>
            </td>
        </tr>
        <tr>
            <td class="text-input">ฐาน </td>
            <td><input type="text" class="result" name="base" value="<?php echo $base; ?>"></td>
        </tr>
        <tr>
            <td class="text-input">ความสูง</td>
            <td><input type="text" class="result" name="height" value="<?php echo $height; ?>"></td>
        </tr>
        <tr>
            <td class="text-input">สูตร 1/2 * ( ฐาน * ความสูง )</td>
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
</body>

</html>