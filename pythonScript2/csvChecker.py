__author__ = 'Ryan Jones'

fileName= "outPut.csv"
#fileName2 = "test.txt"
csvFile = open(fileName,'r')
readable = csv.reader(csvFile)

for line in readable:
    print(line)