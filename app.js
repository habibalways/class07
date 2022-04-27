// - Create a Student Array & Object Data Structure ( name, roll, age, class, gender, location, Admission fees ) 30.  now create a console data table with
const studentinfo = [
    {
        Name: 'Habib',
        Roll: 1,
        Age: 16,
        Class: 'Seven',
        Gender: 'male',
        Location: 'Uttora',
        Add_fee: 3200,
    },
    {
        Name: 'Arifa',
        Roll: 2,
        Age: 17,
        Class: 'Eight',
        Gender: 'Female',
        Location: 'Danmondi',
        Add_fee: 2600,
    },
    {
        Name: 'Robin',
        Roll: 3,
        Age: 19,
        Class: 'Ten',
        Gender: 'male',
        Location: 'Mirpur',
        Add_fee: 2700,
    },
    {
        Name: 'Rabeya',
        Roll: 4,
        Age: 23,
        Class: 'Seven',
        Gender: 'Female',
        Location: 'Uttora',
        Add_fee: 1900,
    },
    {
        Name: 'Kulsum',
        Roll: 5,
        Age: 25,
        Class: 'Eight',
        Gender: 'Female',
        Location: 'Badda',
        Add_fee: 1800,
    },
    {
        Name: 'Rifat',
        Roll: 6,
        Age: 28,
        Class: 'Six',
        Gender: 'male',
        Location: 'Mirpur',
        Add_fee: 1500,
    },
    {
        Name: 'Romjan',
        Roll: 7,
        Age: 12,
        Class: 'Eight',
        Gender: 'male',
        Location: 'Danmondi',
        Add_fee: 2200,
    },
    {
        Name: 'Sabana',
        Roll: 23,
        Age: 10,
        Class: 'Seven',
        Gender: 'Female',
        Location: 'Uttora',
        Add_fee: 2300,
    },
    {
        Name: 'Shakib',
        Roll: 45,
        Age: 9,
        Class: 'Ten',
        Gender: 'male',
        Location: 'Mirpur',
        Add_fee: 1700,
    },
    {
        Name: 'Mustafiz',
        Roll: 65,
        Age: 20,
        Class: 'Six',
        Gender: 'male',
        Location: 'Badda',
        Add_fee: 1500,
    },
    {
        Name: 'Mamun',
        Roll: 33,
        Age: 21,
        Class: 'Six',
        Gender: 'male',
        Location: 'Danmondi',
        Add_fee: 2000,
    },
    {
        Name: 'Rajib',
        Roll: 22,
        Age: 16,
        Class: 'Ten',
        Gender: 'male',
        Location: 'Uttora',
        Add_fee: 3000,
    },
]

//- Total Admnission fees
let total_income = 0;
studentinfo.sort().map((data, index) => {
    console.log(` ${index + 1}.Name${data.Name}-addmission fee ${data.Add_fee}`);
    total_income += data.Add_fee;
});
console.log(`-----------------------------------------------------------------------------
    Total income = ${total_income}
`);


// - Find All Female Students
studentinfo.sort().map((data, index) => {
    if (data.Gender === 'Female') {
        console.log(`
        Name:${data.Name}
        Gender: ${data.Gender}
        `);
    }
});

//- Find class wise student result

studentinfo.sort().map((data, index) => {
    if (data.Class === 'Eight') {
        console.log(data);
    }
    if (data.Class === 'Seven') {
        console.log(data);
    }
    if (data.Class === 'Ten') {
        console.log(data);
    }
    if (data.Class === 'Six') {
        console.log(data);
    }
});

// - Location wise student result

studentinfo.sort().map((data, index) => {
    if (data.Location === 'Mirpur') {
        console.log(data);
    }
    if (data.Location === 'Uttora') {
        console.log(data);
    }
    if (data.Location === 'Badda') {
        console.log(data);
    }
    if (data.Location === 'Danmondi') {
        console.log(data);
    }
});
// - find student between 10 - 25 age

studentinfo.sort().map((data, index) => {
    if (data.Age >= 10 && data.Age<=25) {
        console.log(data);
    }

})
