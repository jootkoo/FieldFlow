import { Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Navbar } from "../../components/navbar/navbar";

// This is the inventory component, which allows users to view and manage their inventory.
// It provides a simple and intuitive interface for users to access their inventory data 
// and make informed decisions about their stock levels and product availability.
@Component({
    standalone: true,
    imports: [Navbar, CommonModule, FormsModule],
    selector: 'inventory',
    templateUrl: './inventory.html',
    styleUrls: ['./inventory.css']
})
export class Inventory {
    private router = inject(Router);
  // Inventory properties
    item: string = '';
    quantity: number = 0;
    stock: { item: string, quantity: number }[] = [];

    editingIndex: number | null = null;
    editItem: string = '';
    editQuantity: number = 0;

    //Add item to inventory
    //adds the item to the stock array and resets the input fields.
    addItem() {
            this.stock.push({ item: this.item, quantity: this.quantity });

            const itemData = {
                item: this.item,
                quantity: this.quantity
            };
            //send itemData to the backend to save it in the database
    }

    //Start editing item
    startEdit(index: number) {
        this.editingIndex = index;
        this.editItem = this.stock[index].item;
        this.editQuantity = this.stock[index].quantity;
    }

    //Save edited item
    saveEdit(index: number) {
        if (this.editItem && this.editQuantity > 0) {
            this.stock[index] = {
                item: this.editItem,
                quantity: this.editQuantity
            };

            const updatedItemData = {
                item: this.editItem,
                quantity: this.editQuantity
            };
            //send the updated item data to the backend to save it in the database

            this.editingIndex = null;
            this.editItem = '';
            this.editQuantity = 0;
        }
    }

    //Cancel editing
    cancelEdit() {
        this.editingIndex = null;
        this.editItem = '';
        this.editQuantity = 0;
    }

    //Update item quantity in inventory
    //Checks if the new quantity is greater than 0,
    //then updates the quantity of the specified item in the stock array.
    updateItem(index: number, newQuantity: number) {
        if (newQuantity > 0) {
            this.stock[index].quantity = newQuantity;

            const updatedItemData = {
                item: this.stock[index].item,
                quantity: newQuantity
            };
            //send the updated item data to the backend to save it in the database
        }
    }

    //Remove item from inventory
    removeItem(index: number) {
        const removedItemData = {
            item: this.stock[index].item,
            quantity: this.stock[index].quantity
        };

        this.stock.splice(index, 1);

        //send a request to the backend to remove the item from the database
    }
}