//У цьому прикладі обробник події додається до кнопки з ідентифікатором myButton. Коли кнопку натискають, анонімна функція показує вікно сповіщення.

document.getElementById("myButton").addEventListener("click", function () {
	alert("Painiketta klikattiin!");
 });