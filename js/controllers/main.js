import { servicesProducts } from "../services/api.js";

const productsContainer = document.querySelector("[data-product]");
const form = document.querySelector("[data-form]");

function createCard({ name, price, image, id }) {
  const card = document.createElement("div");
  card.classList.add("card");
  
/*Agregar el icono de eliminar del proyecto de alura */
  card.innerHTML = `
		<div class="card_img">
			<img src="${image}" alt="${name}">
		</div>
		<div class="card_info">
			<p>${name}</p>
			<div class="card_price">
				<p>$ ${price}</p>
				<button class="delete_button" data-id="${id}">
					<img src="./assets/trashIcon.svg" alt="Eliminar">
				</button>
			</div>
		</div>
	`;


  addDeleteEvent(card, id);

  return card;
}

function addDeleteEvent(card, id) {
  const deleteButton = card.querySelector(".delete_button");
  deleteButton.addEventListener("click", async () => {
    try {
      await servicesProducts.deleteProduct(id);
      card.remove();
      console.log(`Producto con id ${id} eliminado`);
    } catch (error) {
      console.error(`Error al eliminar el id ${id}:`, error);
    }
  });
}


const renderProducts = async () => {
  try {
    const listProducts = await servicesProducts.productList();
    listProducts.forEach((product) => {
      const productCard = createCard(product);
      productsContainer.appendChild(productCard);
    });
  } catch (err) {
    console.error("Error al cargar productos:", err);
  }
};


form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const name = document.querySelector("[data-name]").value;
  const price = document.querySelector("[data-price]").value;
  const image = document.querySelector("[data-image]").value;

  if (name === "" || price === "" || image === "") {
    alert("Por favor, completar todos los espacios");
  } else {
    try {
      const newProduct = await servicesProducts.createProduct(
        name,
        price,
        image
      );
      console.log("Producto creado con éxito:", newProduct);
      const newCard = createCard(newProduct);
      productsContainer.appendChild(newCard);
    } catch (error) {
      console.error("Error al crear producto:", error);
    }

    form.reset(); 
  }
});

renderProducts();
