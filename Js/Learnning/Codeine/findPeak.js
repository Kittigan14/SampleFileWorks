function findAllPeakElements(nums) {
    const peak = [];

    if (nums.length === 1) return [0];

    for (let i = 0; i < nums.length; i++) {
        if ((i === 0 && nums[i] > nums[i + 1]) || 
            (i === nums.length - 1 && nums[i] > nums[i - 1]) ||
            (nums[i] > nums[i - 1] && nums[i] > nums[i + 1])) peak.push(i);
    }
    return peak;
}

const nums1 = [3, 2, 3, 1];
const nums2 = [1, 2, 1, 3, 5, 6, 4];
const nums3 = [1, 2, 1, 4, 5, 6, 4, 7];

console.log(`Peak element index of : ${nums1} -> ${findAllPeakElements(nums1)}`);
console.log(`Peak element index of : ${nums2} -> ${findAllPeakElements(nums2)}`);
console.log(`Peak element index of : ${nums3} -> ${findAllPeakElements(nums3)}`);

module.exports = findAllPeakElements;