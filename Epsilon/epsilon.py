import time

epsilon = 1.0
number = 1.0
start_time = time.time()

while (1.0 + epsilon != 1.0):
    print("Epsilon: %.12f" % epsilon)
    epsilon /= 2.0

end_time = time.time()
elapsed_time = end_time - start_time

print("Epsilon: %.12f" % epsilon)
print("Elapsed Time: %.6f seconds" % elapsed_time)

if (1.0 + epsilon == 1.0): print('pass')
else: print('not pass')