let cardBody = document.querySelectorAll(".full-card");
let total = document.querySelector(".total");
let amount = 0;

let totalAmount = 0; // Initialize totalAmount outside the loop

cardBody.forEach((div) => {
  // Selecting the add and minus buttons in every product
  const addElement = div.querySelector(".add-btn");
  const quantity = div.querySelector(".quantity");
  const price = div.querySelector(".unit-price");
  const minusElement = div.querySelector(".minus-btn");
  const likedBtn = div.querySelector(".like-btn");
  const removeBtn = div.querySelector(".remove-btn");

  // Initialize amount for the product
  let initialQuantity = Number(quantity.textContent);
  let initialAmount = initialQuantity * Number(price.textContent);
  // Update the totalAmount with the initial amount
  totalAmount += initialAmount;
  total.textContent = totalAmount;

  likedBtn.addEventListener("click", () => {
    likedBtn.classList.toggle("liked-btn");
  });

  removeBtn.addEventListener("click", () => {
    totalAmount -= initialAmount;
    total.textContent = totalAmount;
    div.remove();
  });

  addElement.addEventListener("click", () => {
    // Increment the quantity
    quantity.textContent++;
    console.log(quantity.textContent);

    // Calculate the new amount for the current product
    const newQuantity = Number(quantity.textContent);
    const newAmount = newQuantity * Number(price.textContent);
    console.log(price.textContent);

    // Calculate the difference between the new amount and the previous amount
    const amountDifference = newAmount - initialAmount;

    // Update the totalAmount with the difference
    totalAmount += amountDifference;

    // Update the total display
    total.textContent = totalAmount;
    console.log(totalAmount);

    // Update the initial amount to the new amount
    initialAmount = newAmount;
    initialQuantity = newQuantity;
  });

  minusElement.addEventListener("click", () => {
    if (initialQuantity > 0) {
      // Decrement the quantity
      quantity.textContent--;
      console.log(quantity.textContent);

      // Calculate the new amount for the current product
      const newQuantity = Number(quantity.textContent);
      const newAmount = newQuantity * Number(price.textContent);
      console.log(price.textContent);

      // Calculate the difference between the previous amount and the new amount
      const amountDifference = initialAmount - newAmount;

      // Update the totalAmount with the difference
      totalAmount -= amountDifference;

      // Update the total display
      total.textContent = totalAmount;
      console.log(totalAmount);

      // Update the initial amount to the new amount
      initialAmount = newAmount;
      initialQuantity = newQuantity;
    }
    if (initialQuantity < 1) {
      totalAmount -= initialAmount;
      total.textContent = totalAmount;
      div.remove();
    }
  });
});

// cardBody.forEach((div) => {
//   const quantity = div.querySelector(".quantity");
//   const price = div.querySelector(".unit-price");

//   // Store the initial quantity and amount
//   let initialQuantity = Number(quantity.textContent);
//   console.log(initialQuantity);
//   let initialAmount = initialQuantity * Number(price.textContent);
// });
