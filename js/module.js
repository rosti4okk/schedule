const jsonURL = "../jsons/group.json";

fetch(jsonURL)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Network response was not ok`);
    }
    return response.json();
  })
  .then(data => {
    for (var i in data) {
      if (data.hasOwnProperty(i)) {
        var dayCont = document.createElement('div');
        dayCont.classList.add('day-cont');

        var p = document.createElement('p');
        p.textContent = i;
        p.classList.add('day-item');

        dayCont.appendChild(p);
        daysContainer.appendChild(dayCont);

        var lessonContainer = document.createElement('div');
        lessonContainer.classList.add('lesson-container');

        for (var j = 0; j < data[i].length; j++) {
          var lessonItemContainer = document.createElement('div');
          lessonItemContainer.classList.add('lessons-container');

          var lessonItemNumber = document.createElement('p');
          lessonItemNumber.textContent = (j + 1);
          lessonItemNumber.classList.add('lesson-item-number');
          lessonItemContainer.appendChild(lessonItemNumber);

          var lessonItem = document.createElement('p');
          lessonItem.textContent = data[i][j];
          lessonItem.classList.add('lesson-item');
          lessonItemContainer.appendChild(lessonItem);

          lessonContainer.appendChild(lessonItemContainer);
        }

        dayCont.appendChild(lessonContainer);
      }
    }

    var b = document.getElementsByClassName('lesson-item-number')[34];
    b.remove();
  })
  .catch(error => {
    console.error("Error loading JSON:", error);
  });
