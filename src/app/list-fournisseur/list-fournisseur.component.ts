import { Component } from '@angular/core';
import { Fournisseur } from '../Models/Fournisseurs';
@Component({
  selector: 'app-list-fournisseur',
  templateUrl: './list-fournisseur.component.html',
  styleUrls: ['./list-fournisseur.component.css']
})
export class ListFournisseurComponent {
  fournisseurs: Fournisseur[] = [
    {idFournisseur:1,code:"1ABC4522",libelle:"hp"},
    {idFournisseur:2,code:"2ABC4522",libelle:"dell"},
    {idFournisseur:3,code:"3ABC4522",libelle:"lenovo"},
    {idFournisseur:400,code:"40ABC452",libelle:"asus"}
    
  ]
  getColor(code: string) {
    const isCode2A = code.startsWith('2A');
    return {
      'font-weight': isCode2A ? 'bold' : 'normal'
    };
  }
  supprimerFournisseur(fournisseur: any) {
    const index = this.fournisseurs.indexOf(fournisseur);
    if (index !== -1) {
      this.fournisseurs.splice(index, 1);
    }
  }
}
