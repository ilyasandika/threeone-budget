import kitchen from "../assets/icons/kitchen.svg";
import supplierKitchen from "../assets/icons/supplier-kitchen.svg";
import bar from "../assets/icons/bar.svg";
import supplierBar from "../assets/icons/supplier-bar.svg";
import cashier from "../assets/icons/cashier.svg";
import office from "../assets/icons/office.svg";
import operasional from "../assets/icons/operasional.svg";

function capitalizeWords(str: string): string {
    return str
	.toLowerCase()
	.split(' ')
	.map(word => word.charAt(0).toUpperCase() + word.slice(1))
	.join(' ')
}

function numberToRupiah(number: number): string {
    return new Intl.NumberFormat("id-ID", {
	style: "currency",
	currency: "IDR"
    }).format(number);
}

function titleToImage(title: string):string {
    switch (title.toLowerCase()) {
	case "kitchen":
	    return kitchen;
	case "supplier kitchen":
	    return supplierKitchen;
	case "bar":
	    return bar;
	case "supplier bar":
	    return supplierBar;
	case "cashier":
	    return cashier;
	case "office":
	    return office;
	case "operasional":
	    return operasional;
	default:
	    return "";
    }
};


export {
    capitalizeWords,
    titleToImage,
    numberToRupiah
}