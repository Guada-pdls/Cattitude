# Cattitude

E-commerce inventado de productos para gatitos.

| Componente          | Descripción |
| ------------------- | ----------- |
| Navbar              | Header con nav (categorías y secciones), menú hamburguesa, buscador de productos integrado, acceso al cart. |
| Footer              | Footer mostrando derechos y enlaces a redes sociales de la empresa. |
| Spinner             | Muestra un spinner en caso de loading. |
| UnavailableWarning  | Si la categoría o el ítem de la ruta no existe, muestra un mensaje de que no está disponible. Recibe una prop factor, si esta es nula, muestra contenido para categoría, de lo contrario, para item. |
| NotFound            | Si se pasa una ruta inválida, muestra el 404 error pero con estilo y la posibilidad de uso del header. |
| About               | Contenido representativo para el sitio, fotos de gatitos, texto. |
| Faq                 | Más contenido representativo, preguntas y respuestas frecuentes. |
| FaqQuestion         | De cada una de las preguntas mencionadas en Faq, FaqQuestion hace un toggle para las respuestas. |
| ItemDetailContainer | Obtiene el producto a detallar de la base de datos y se lo pasa a itemDetail. Mientras carga, llama a Spinner, y si carga pero no existe, llama a UnavailableWarning |
| ItemDetail          | Recibe un item y crea su detalle, junto con el ItemCount |
| ItemCount           | Recibe el mismo item, y crea un contador para la cantidad, un botón de agregar al carrito (addProduct) y otro para comprar ahora (setItemBuyNow). Muestra el stock disponible del item, y no permite que la cantidad a agregar o comprar sea mayor al mismo. |
| ItemListContainer   | Trae los productos de la base de datos. Si existe categoryId, trae solo esos productos. De lo contrario, todos. En caso de carga, muestra Spinner, en caso de haber cargado, pasa los productos a ItemList, y si cargó pero no existe, muestra UnavailableWarning. |
| ItemList            | Recibe un array de items y mapea para mostrar un Link a su detalle e Item. |
| Item                | Simplemente muestra la card del producto pasado como parámetro |
| Checkout            | Muestra el detalle de la orden de compra y un formulario del buyer. Este solo verifica los campos name, lastName y phone, los demás son representativos. Estos mismos tienen estados independientes, para poder ponerlos rojos o verdes, dependiendo del resultado de la verificación. También envía estos datos, junto con los de los items a comprar, la fecha y el total a firebase, y los guarda en la collection "orders". Como en el detail puse 2 botones (uno de agregar al carrito y otro de comprar ahora) este checkout recibe una prop item en caso de clickear en comprar ahora, teniendo de ruta "/checkout", y si no recibe la prop, lo hace con el carrito, con la ruta "/cart/checkout" |
| ItemCheckout        | Recibe un producto y arma su card en el checkout. |
| CartContext         | Aquí está toda la lógica del carrito. Obtiene del localStorage el contenido de cart (si es que existe), y sino lo setea cada vez que cambia. Contiene funciones de verificar si existe o no en el carrito, agregar producto, remover producto, vaciar carrito, obtener el valor inicial para el itemCount, y setea el item para BuyNow. Además, funciona de proveedor para el contexto. |
| Cart                | Muestra todos los productos agregados al carrito y sus respectivas cantidades, junto con la posibilidad de remover cada uno individualmente, borrar todos y comprarlos. Si no hay productos en el carrito, muestra un mensaje de que está vacío. |
| CartWidget          | Ícono de acceso al cart. Calcula la cantidad de productos que extrae del cart y lo muestra en el span. Si no hay productos, solo queda el ícono. |

## Dependencias extra utilizadas: 
- React Icons: Íconos.
- Toastify: Notificación de agregar y remover items del cart.
- SweetAlert: Alertas en el flujo de compra y en errores de firebase.