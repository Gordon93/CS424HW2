__author__ = 'Ryan Jones'

import csv

def parse_data(tempData):
    year = int(int(tempData)/10000)
    month = int((int(tempData)-(year*10000))/100)
    day = int(int(tempData)-((year*10000)+(month*100)))
    return (year,month,day)

def parse_data2(tempData):
    size = len(tempData)
    count = 0
    value = 0

    while(size!=count):
        if (tempData[count]>= '0') & (tempData[count]<='9'):
            value = (10*value)+ int(tempData[count])
        elif tempData[count]=='.':
            value = float(value + (float(tempData[count+1])/10))
           # print (value)
            count = count + 1


        else:
            dir = tempData[count]

        count = count +1

    if (dir=='S') | (dir=='W'):
        value = value * -1

    return (value,dir)

def whiteSpaces(tempData):
    size = len(tempData)
    count = 0
    temp = ''


    while count < size:
        if tempData[count] !=' ':
            temp =temp + tempData[count]

        count = count + 1



    return (temp)




#fileName= "hurdat2-nencpac-1949-2014-092515.txt"
fileName = "hurdat2-1851-2014-060415.txt"
csvFile = open(fileName,'r')
readable = csv.reader(csvFile)
writable = csv.writer(open("output.csv",'w',newline=''))
filterData = []
line1 = []
Headers = ["HURID","NAME","YEAR","MONTH","DAY","HOURS","RECID","StatusOfSys","LAT","LOG",
           "MaxWind","MinPress","34KTWindNE","34KTWindSE","34KTWindSW","34KTWindNW","50KTWindNE",
           "50KTWindSE","50KTWindSW","50KTWindNW","64KTWindNE","64KTWindSE","64KTWindSW","64KTWindNW"]
filterData.append(Headers)
lineCount = 0
HURID = []
MONTH = []
hours = []
DAY = []
YEAR = []
NAME = []
temp = []
recID = []
statOfSys = []
lat = []
latDir = []
log = []
logDir = []
index = 0
#for line in readable:
 #    print(line)


for line in readable:
    size = len(line)
    if size == 4 :
        #print(line)
        HURID = line[0]
        NAME = whiteSpaces(line[1])
        numOfLines = int(line[2])
    else:

        if(lineCount != numOfLines):
            line1 = []
            (YEAR,MONTH,DAY) = parse_data(line[0])

            if YEAR < 2005:
                line1.append(HURID)
                line1.append(NAME)
                line1.append(YEAR)
                line1.append(MONTH)
                line1.append(DAY)
                index = 1
                while index < 4:
                    line1.append(whiteSpaces(line[index]))
                    index = index + 1

                (lat,latDir)= parse_data2(line[4])
                line1.append(lat)
                (log,logDir)= parse_data2(line[5])
                line1.append(log)
                index = 6
                while index < 20:
                    line1.append(whiteSpaces(line[index]))
                    index = index + 1

                filterData.append(line1)
                lineCount = lineCount +1
        else:
            lineCount = 0












#for line in readable:
 #   if line[5] == '0':
  #      if line[6] == '999':
   #       line1=[]
    #      line1.append(line[4])
     #     line1.append(line[6])
      #    line1.append(line[12])
       #   filterData.append(line1)
        #  print(line1)

#for line in readable:
 #   if line[5] == '0':

  #      if line[12] == "POPEST2014_CIV":
   #         continue
    #    else:
     #       value = int(line[12])
      #      if line[6] == "0":
       #         popCount = 0 + value

        #    elif line[6] == "10" or line[6] == "20" or line[6] == "30" or line[6] == "40"\
         #       or line[6] == "50" or line[6]=="60" or line[6] == "70" or line[6] == "80" \
          #          or line[6] == "84" or line[6] == "85":

           #     line1.append(line[4])
            #    if line[6] != "85":

             #       if line[6] == "84":
              #          ageVal = int(line[6])
               #         ageBegin = ageVal - 4
                #        line1.append(str(ageBegin)+"-"+line[6]);

                 #   else :
                  #      ageVal = int(line[6])
                   #     ageBegin = ageVal - 10
                    #    ageEnd = ageVal - 1;
                     #   line1.append(str(ageBegin)+"-"+str(ageEnd));

                #else :
                 #   line1.append(line[6]+"+")


                #line1.append(popCount)
                #line1.append(AGEGROUP)
                #filterData.append(line1)

                #line1 = []
                #AGEGROUP= ++AGEGROUP
                #popCount = 0 + value

            #else:
             #   popCount = value + popCount
               # print(line[4]+" "+line[6]+" "+str(popCount))

#for line in filterData:
   #print(line)

for line in filterData:
    if line != [ ]:
        writable.writerow(line)
        #print(line)
    #print(count)




