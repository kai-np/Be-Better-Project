document.addEventListener("DOMContentLoaded", function () {
  const calendar = document.getElementById("calendar");
  const monthSelector = document.getElementById("monthSelector");
  const yearSelector = document.getElementById("yearSelector");
  const prevMonthButton = document.getElementById("prevMonth");
  const nextMonthButton = document.getElementById("nextMonth");

  // Sample data with images for certain dates
  const dateData = [
    { date: new Date(2023, 5, 4), image: "img/okay.png" },
    { date: new Date(2023, 5, 10), image: "img/okay.png" },
  ];

  function generateCalendar(year, month) {
    // Clear previous calendar
    calendar.innerHTML = "";

    // Generate options for month and year selectors
    // (You may want to automate this)
    for (let i = 0; i < 12; i++) {
      const option = document.createElement("option");
      option.value = i;
      option.text = new Date(year, i, 1).toLocaleString("default", {
        month: "long",
      });
      monthSelector.appendChild(option);
    }

    for (let i = year - 10; i <= year + 10; i++) {
      const option = document.createElement("option");
      option.value = i;
      option.text = i;
      yearSelector.appendChild(option);
    }

    // Set initial values for selectors
    monthSelector.value = month;
    yearSelector.value = year;

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();

    for (let i = 1; i <= daysInMonth; i++) {
      const day = document.createElement("div");
      day.className = "calendar-day";

      day.innerHTML = "<p class='day-text'>" + i + "</p>";

      day.addEventListener("click", () => {
        const clickedDate = new Date(year, month, i);
        console.log(
          `Clicked: ${clickedDate.getFullYear()}-${
            clickedDate.getMonth() + 1
          }-${clickedDate.getDate()}`
        );
      });
      // Check if the date has associated data
      const currentDate = new Date(year, month, i);
      const matchingData = dateData.find(
        (item) => currentDate.getTime() === item.date.getTime()
      );

      if (matchingData) {
        const image = document.createElement("img");
        image.src = matchingData.image;
        day.appendChild(image);
      }

      calendar.appendChild(day);
    }
  }

  const currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  let currentMonth = currentDate.getMonth();

  generateCalendar(currentYear, currentMonth);

  prevMonthButton.addEventListener("click", () => {
    if (currentMonth === 0) {
      currentYear--;
      currentMonth = 11;
    } else {
      currentMonth--;
    }
    generateCalendar(currentYear, currentMonth);
  });

  nextMonthButton.addEventListener("click", () => {
    if (currentMonth === 11) {
      currentYear++;
      currentMonth = 0;
    } else {
      currentMonth++;
    }
    generateCalendar(currentYear, currentMonth);
  });

  monthSelector.addEventListener("change", () => {
    currentMonth = parseInt(monthSelector.value, 10);
    generateCalendar(currentYear, currentMonth);
  });

  yearSelector.addEventListener("change", () => {
    currentYear = parseInt(yearSelector.value, 10);
    generateCalendar(currentYear, currentMonth);
  });
});
