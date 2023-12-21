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
        $height = 8;
        $a = 3;
        $b = 5;
        $Sum = 1/2 * $height * ($a + $b);
    ?>
    <div class="table">
        <table border="2px" align="center" width="500">
            <tr>
                <td colspan="2" align="center" class="title">
                    <big> คำนวณพื้นที่สี่เหลี่ยมคางหมู </big>
                </td>
            </tr>
            <tr>
                <td>Enter Height </td>
                <td class="result"><?php echo $height; ?></td>
            </tr>
            <tr>
                <td>Enter length of parallel lines a </td>
                <td class="result"><?php echo $a; ?></td>
            </tr>
            <tr>
                <td>Enter length of parallel lines b </td>
                <td class="result"><?php echo $b; ?></td>
            </tr>
            <tr>
                <td>Sum 1/2 * Height * (a + b) </td>
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
