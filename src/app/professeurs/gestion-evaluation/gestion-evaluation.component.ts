import { Evaluations } from './../../models/evaluation';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-gestion-evaluation',
  templateUrl: './gestion-evaluation.component.html',
  styleUrls: ['./gestion-evaluation.component.css']
})
export class GestionEvaluationComponent implements OnInit {
  evaluation: number | undefined;
chargerInfosEvaluation(arg0: Evaluations[]) {
throw new Error('Method not implemented.');
}
  evaluations: Evaluations[] = [];
  nouvelleEvaluation: Evaluations = {
    id:0,
    semestre: '',
    date: new Date(),
    type: '',
    anneeScolaire: '',
    etat: '',
    matiere: '',

  };
  imageUrl:String="assets/logo.png";

//   constructor(private profService: FormateurService ) {}

  ngOnInit(): void {
    console.log("CC");
    this.evaluations = JSON.parse(localStorage.getItem("evaluations") || "[]")
    // this.evaluations = this.profService.getEvaluations();
    console.log(this.evaluations);
  }
  // showprogrammerEvaluation: boolean=true;
  programmerEvaluation(): void {

    // this.profService.programmerEvaluation(this.nouvelleEvaluation);
    this.nouvelleEvaluation = {
      id: 0,
      semestre: '',
      date: new Date(),
      type: '',
      anneeScolaire: '',
      etat: '',
      matiere: '',
  
    };
  }

 // Methode pour supprimer le contact
  
 supprimerEvaluation(id: number): void {
  Swal.fire({
      title: "Êtes-vous sûr?",
      text: "Vous allez supprimer définitivement cette évaluation.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Oui, je supprime!"
  }).then((result) => {
      if (result.isConfirmed) {
          // Si l'utilisateur confirme la suppression
          this.evaluations = this.evaluations.filter((evaluation) => evaluation.id !== id);
          // Ensuite, vous pouvez appeler votre service pour supprimer également côté backend
        //   this.profService.supprimerEvaluation(id);
          // Afficher un message de confirmation
          Swal.fire("Supprimé!", "L'évaluation a été supprimée.", "success");
      }
  });
}


    // Methode pour modifier le contact

    modifierEvaluation(id: number): void {
      // Logique pour récupérer l'évaluation en fonction de l'ID et afficher un formulaire de modification
      // Par exemple :
      const evaluationAModifier = this.evaluations.find((evaluation) => evaluation.id === id);
      if (evaluationAModifier) {
          // Vous pouvez utiliser Swal ou créer un formulaire pour la modification ici
          // Mettre à jour les données et appeler votre service pour la mise à jour côté backend
        //   this.profService.modifierEvaluation(id, evaluationAModifier);
          // Afficher un message de confirmation
          Swal.fire("Modifié!", "L'évaluation a été modifiée.", "success");
      } else {
          Swal.fire("Erreur!", "Évaluation non trouvée.", "error");
      }
  }
  

}

