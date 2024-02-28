import { Component, HostListener, AfterViewInit, ViewChild, ElementRef} from '@angular/core';
import { exampleSvg } from '../../assets/typescripts/4Q';
import { teeShirt } from '../../assets/typescripts/teeShirt';
import { ChangeDetectorRef } from '@angular/core';
import { AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent{
  svgContent: string = exampleSvg;
  teeSvg: string = teeShirt;
  public containerHeight: number;
  public imageHeight: number;
  public topMargin: number;
  public totalMargin: number;
  public bottomMargin: number;
  public bottomPadding: number;
  public height: number;
  public width: number;
  public rightMargin: number;
  public leftMargin: number;

  public element = document.getElementById("HTML element");

  constructor(private cdr: ChangeDetectorRef) {
    this.calculateDimensions();
  }

  ngAfterViewInit() {
    this.width = this.garment.nativeElement.offsetWidth;
    this.height = this.garment.nativeElement.offsetHeight;
    console.log('Width: ' + this.width)
    console.log('Height: ' + this.height)
    this.calculateDimensions();
    this.cdr.detectChanges();
  }

  ngAfterViewChecked(){
    this.width = this.garment.nativeElement.offsetWidth;
    this.height = this.garment.nativeElement.offsetHeight;
    this.calculateDimensions();
  }
 

  ngOnInit(): void {
    this.calculateDimensions();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event, element: string){
    
    this.width = this.garment.nativeElement.offsetWidth;
    this.height = this.garment.nativeElement.offsetHeight;

    console.log('Width: ' + this.width)
    console.log('Height: ' + this.height)
    this.calculateDimensions();
  }


  updateFillColor(newColor: string){
    this.teeSvg = this.teeSvg.replace(`fill: #7B8482`, `fill:${newColor}`);
  }

  updateStrokeColor(newColor: string){
    this.teeSvg = this.teeSvg.replace(`stroke: #03110E`, `stroke:${newColor}`);
  }

  private calculateDimensions(): void {
    this.bottomMargin = this.height * 0.20707596 * -1;
    this.topMargin = this.height * 0.16129032 * -1;
    this.containerHeight = this.height ;
    this.rightMargin = this.width * 0.07358739 * -1;
    this.leftMargin = this.width * 0.06701708 * -1;
  }

  @ViewChild('garment')
  garment: ElementRef;
}
