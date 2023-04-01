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
    const inEvent = employeeRecord.timeInEvents.find(event => event.date === date)
    const outEvent = employeeRecord.timeOutEvents.find(event => event.date === date)
    return (outEvent.hour - inEvent.hour) / 100
}

function wagesEarnedOnDate(employeeRecord , date){
    return hoursWorkedOnDate(employeeRecord , date) * employeeRecord.payPerHour
}

function allWagesFor(employeeRecord){
    const eligibleDates = employeeRecord.timeInEvents.map(e => e.date)
    const totalWage = eligibleDates.reduce((wage , date) => wage + wagesEarnedOnDate(employeeRecord , date) , 0)
    return totalWage
}

function calculatePayroll(employeeRecords){
    return employeeRecords.reduce((wage , employeeRecord) => wage + allWagesFor(employeeRecord) , 0)
}