    const eventName = document.getElementById("eventName")
    const eventDate = document.getElementById("eventDate")
    const eventTime = document.getElementById("eventTime")
    const btnSubmit = document.getElementById("btnSubmit")
    const upcomingEvent = document.getElementById("upcomingEvent")

    btnSubmit.addEventListener("click",()=>{

      const addEvent = document.createElement("div")
      const remButton = document.createElement("button")
      addEvent.innerHTML = `
                    <div class="card" style="width: flex;">
                <div class="card-body">
                  <h5 class="card-title">${eventName.value}</h5>
                  <p class="card-text">Date : ${eventDate.value}</p>
                  <p class="card-text">Time : ${eventTime.value}</p>
                </div>
              </div>
      `
      addEvent.classList = "mt-3"
      upcomingEvent.append(addEvent)
      remButton.innerHTML = `Remove`
      remButton.className = "btn btn-danger"
      addEvent.append(remButton)
      
      remButton.addEventListener("click",()=>upcomingEvent.removeChild(addEvent))
      
    })