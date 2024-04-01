// header shadow on scroll
window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  if (window.scrollY > 35) {
    header.classList.add('show');
  } else {
    header.classList.remove('show');
  }
});


// menu toggle effect
const menubtn = document.getElementById('menubtn')
const closemn = document.getElementById('closemn')
const menu = document.querySelector('.menu')

menubtn.addEventListener('click', ()=> {
  menu.classList.add('show')
})

closemn.addEventListener('click', ()=> {
  menu.classList.remove('show')
})


// text changing animation
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

const devices = ["Smartphones", "Tabs & iPads", "Smart Watches", "Laptops", "Accessories"]
let sleepTime = 100
const el = document.getElementById("span")

let curDeviceIndex = 0

const loopDevice = async() => {
  while (true) {
    let curDevice = devices[curDeviceIndex]
    
    for (let i = 0; i < curDevice.length; i++) {
      el.innerText = curDevice.substring(0, i + 1)
      await sleep(sleepTime)
    }

    await sleep(sleepTime * 10)

    for (let i = curDevice.length; i > 0; i--) {
      el.innerText = curDevice.substring(0, i - 1)
      await sleep(sleepTime)
    }
    
    await sleep(sleepTime * 5)
    
    if (curDeviceIndex === devices.length - 1) {
      curDeviceIndex = 0;
    } else {
      curDeviceIndex++;
    }
  }
}

loopDevice();


// sending message to email
document.getElementById("form").addEventListener("submit", function(event) {
  event.preventDefault();

  // Get the message from the textarea
  var message = document.getElementById("message").value;

  // Create a mailto link with the message and subject
  var subject = "Customer Cool Gadgets";
  var mailtoLink = "mailto:yassinkatungi67@gmail.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(message);

  // Open the default email client with the mailto link
  window.location.href = mailtoLink;
});

// changing the date automatically
function updateDate() {
  const currentDate = new Date();
  const options = { year: "numeric" };
  const formattedDate = currentDate.toLocaleDateString("en-US", options);

  // Display the updated date in the 'date' paragraph
  document.getElementById("year-copy").textContent = formattedDate;
}

// Call the updateDate function to initially display the date
updateDate();

// Set an interval to update the date every second (you can adjust the interval)
setInterval(updateDate, 1000);