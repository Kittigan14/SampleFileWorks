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
        $height = isset($_POST['height']) ? $_POST['height'] : '';
        $a = isset($_POST['a']) ? $_POST['a'] : '';
        $b = isset($_POST['b']) ? $_POST['b'] : '';
        $Sum = '';

        if (isset($_POST['reset'])) {
            $height = 0;
            $a = 0;
            $b = 0;
        }
        
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            if ($height !== '' && $a !== '' && $b !== '') {
                $Sum = 1/2 * $height * ($a + $b);
            }
        }
    ?>

    <form method="post" action="">
        <table border="2px" align="center" width="500">
            <tr>
                <td colspan="2" align="center" class="title">
                    <big> คำนวณพื้นที่สี่เหลี่ยมคางหมู </big>
                </td>
            </tr>
            <tr>
                <td class="text-input">ความสูง </td>
                <td><input type="text" class="result" name="height" value="<?php echo $height; ?>"></td>
            </tr>
            <tr>
                <td class="text-input">ความยาวของเส้นขนาน a </td>
                <td><input type="text" class="result" name="a" value="<?php echo $a; ?>"></td>
            </tr>
            <tr>
                <td class="text-input">ความยาวของเส้นขนาน b </td>
                <td><input type="text" class="result" name="b" value="<?php echo $b; ?>"></td>
            </tr>
            <tr>
                <td class="text-input">สูตร  1/2 * ( ความสูง * (a + b) )</td>
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
    </form>
</body>

</html>