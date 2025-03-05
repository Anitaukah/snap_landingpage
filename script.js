/** @format */
// const showMenu = (toggleId) => {
// 	const toggle = document.getElementById(toggleId);
// 	nav = document.getElementById("navId")

// 	toggle.addEventListener("click", () => {
// 		nav.classList.toggle('show-menu');
// 		toggle.classList.toggle("show-icon");
// 	});
// };
// showMenu('nav-toggle', 'nav-menu');
// nav-menu

function showSidebar() {
	const sidebar = document.querySelector(".sidebar");
	sidebar.style.display = "block";
}

function hideSidebar() {
	const sidebar = document.querySelector(".sidebar");
	sidebar.style.display = "none";
}
