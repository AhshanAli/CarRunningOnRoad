import { LightningElement, track } from 'lwc';
import sfkidcar from '@salesforce/resourceUrl/sfKidCar';
import sfkidcarWheel from '@salesforce/resourceUrl/sfKidCarWheel';
import sfkidroad from '@salesforce/resourceUrl/sfKidRoad';
export default class LwcConditionalRendering extends LightningElement {

    //mapped with the HTML variables
    car = sfkidcar;
    wheel = sfkidcarWheel;
    road = sfkidroad;
    //Using track as we want to reflect the change on screen   
    @track isvisible;
    //Below code will call when switch is on/off
    //It will change the value of isvisible to true or false
    //based on this isvisible value conditional rendering will display 
    handleChange(event) {
        this.isvisible = event.target.checked;
    }
}