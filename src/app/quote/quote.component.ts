import { Component, OnInit } from '@angular/core';
import { Quote} from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quote[index].name}?`)
    

      if (toDelete){
        this.quote.splice(index,1)
      }
else{
  alert('Thank you for leaving your quote!!!.')
}
    }
  }
  
  quote: Quote[] = [
    new Quote(1, "People Who Are Crazy Enough To Think They Can Change The World,Are One Who Do. Author-Rob Siltanen", "",new Date(2019,1,1)),
    new Quote(2, "Entrepreneurs Are Great At Dealing With Uncertainty And Also Very Good At Minimizing Risk. That’s The Classic Entrepreneur. Author-Mohnish Pabrai","",new Date(2019,4,14)),
    new Quote(3, "Imagine Your Life Is Perfect In Every Respect; What Would It Look Like?. Author-Brian Tracy","",new Date(2019,9,2)),
    new Quote(4, "Security Is Mostly A Superstition. Life Is Either A Daring Adventure Or Nothing. Author-Helen Keller","",new Date(2018,6,2)),
    new Quote(5, "What You Lack In Talent Can Be Made Up With Desire, Hustle And Giving 110% All The Time. Author-Don Zimmer","",new Date(2018,3,4)),
    new Quote(6, "Do not let what you can not do interfare with what you can do. Author-Samwel.A.Rangili","",new Date(2020,4,2)),

  ];
  toggleDetails(index){
    this.quote[index].showDescription = !this.quote[index].showDescription;
  }
   
  completeQuote(isComplete, index){
    if (isComplete) {
      this.quote.splice(index,1);
    }
  }
  addNewQuote(quote){
    let quoteLength = this.quote.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quote.push(quote)
  }

  constructor() { }

  ngOnInit() {
  }

}