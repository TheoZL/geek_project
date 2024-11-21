const BASE_URL = "http://localhost:3001/products";

const productList = async () => {
  try {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al cargar productos:", error);
  }
};

const createProduct = async (name, price, image) => {
  try {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, price, image }),
    });

    const data = await response.json();
    console.log("Solicitud exitosa:", data);
    return data;
  } catch (error) {
    console.error("Error en la solicitud:", error);
  }
};

const deleteProduct = async (id) => {
  try {
    await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(`Producto ${id} eliminado exitosamente`);
  } catch (error) {
    console.error("Error al eliminar:", error);
  }
};

export const servicesProducts = {
  productList,
  createProduct,
  deleteProduct,
};