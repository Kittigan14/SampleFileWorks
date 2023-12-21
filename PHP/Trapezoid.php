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
        // Initialize variables with default values or set them to empty strings
        $height = isset($_POST['height']) ? $_POST['height'] : '';
        $a = isset($_POST['a']) ? $_POST['a'] : '';
        $b = isset($_POST['b']) ? $_POST['b'] : '';
        $Sum = '';

        // Check if the form is submitted
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            // Calculate the sum if all inputs are provided
            if ($height !== '' && $a !== '' && $b !== '') {
                $Sum = 1/2 * $height * ($a + $b);
            }
        }
    ?>

    <div class="table">
        <form method="post" action="">
            <table border="2px" align="center" width="500">
                <tr>
                    <td colspan="2" align="center" class="title">
                        <big> คำนวณพื้นที่สี่เหลี่ยมคางหมู </big>
                    </td>
                </tr>
                <tr>
                    <td>Enter Height </td>
                    <td><input type="text"  class="result" name="height" value="<?php echo $height; ?>"></td>
                </tr>
                <tr>
                    <td>Enter length of parallel lines a </td>
                    <td><input type="text"  class="result" name="a" value="<?php echo $a; ?>"></td>
                </tr>
                <tr>
                    <td>Enter length of parallel lines b </td>
                    <td><input type="text" class="result" name="b" value="<?php echo $b; ?>"></td>
                </tr>
                <tr>
                    <td>Sum 1/2 * Height * (a + b) </td>
                    <td style="text-align: center;"><?php echo $Sum; ?></td>
                </tr>
                <tr>
                    <td colspan="2" align="center" class="btn">
                        <input type="submit" value="Calculate">
                        <input type="reset" value="Clear">
                        <a href="./index.php" class="back">Back</a>
                    </td>
                </tr>
            </table>
        </form>
    </div>
</body>
</html>
