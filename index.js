function createEmployeeRecord(employee){
    const employeeRecord = {
        firstName: employee[0],
        familyName: employee[1],
        title: employee[2],
        payPerHour: employee[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return employeeRecord
}

function createEmployeeRecords(employees){
    const employeeRecords = []
    for (const employee of employees) {
        employeeRecords.push(createEmployeeRecord(employee))
    }
    return employeeRecords
}

function createTimeInEvent(employeeRecord , dateStamp){
    const [date,hour] = dateStamp.split(" ")
    employeeRecord.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour , 10),
        date: date
    })
    return employeeRecord
}

function createTimeOutEvent(employeeRecord , dateStamp){
    const [date,hour] = dateStamp.split(" ")
    employeeRecord.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour , 10),
        date: date
    })
    return employeeRecord
}

function hoursWorkedOnDate(employeeRecord , date){
    return hoursWorked
}

function wagesEarnedOnDate(employeeRecord , date){
    return payOwed
}

function allWagesFor(employeeRecord){
    return totalPayOwed
}

function calculatePayRoll(employeeRecords){
    return sumOfPay
}