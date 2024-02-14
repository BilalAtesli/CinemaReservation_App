const seatDiv = document.querySelectorAll(".container .seat")
const count = document.querySelector("#count")
const amount = document.querySelector("#amount")
const movieListDiv = document.querySelector("#movie")

let selectedSeat = [];
let price = 0;
let value = movieListDiv[1].value;

seatDiv.forEach(item => {
	item.addEventListener("click", () => {

		if (!item.classList.contains("reserved")) {

			item.classList.toggle("selected");

		}
		item.classList.contains("selected") ? selectedSeat.push(item) : selectedSeat.pop(item)
		let selectedSeatCount = selectedSeat.length
		count.innerHTML = selectedSeatCount;
		calculation(value, selectedSeatCount)
		amount.innerHTML = `${price} TL`
	})
})
movieListDiv.addEventListener("click", (event) => {
	value = event.target.value;
})

function calculation(value, count) {
	price = value * count;
}

