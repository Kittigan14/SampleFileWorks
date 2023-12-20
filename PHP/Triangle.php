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
        $width = 5;
        $height = 3;
        $Sum =  1/2 * ($width * $height);
    ?>
    <div class="table">
        <table border="2px" align="center" width="500" class="content">
            <tr>
                <td colspan="2" align="center">
                    <big> คำนวณพื้นที่สามเหลี่ยม </big>
                </td>
            </tr>
            <tr>
                <td>Enter Width : </td>
                <td><input type="text" name="width" size="5" value="<?php echo $width; ?>"/> </td>
            </tr>
            <tr>
                <td>Enter Height : </td>
                <td><input type="text" name="height" size="5" value="<?php echo $height; ?>"/></td>
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
