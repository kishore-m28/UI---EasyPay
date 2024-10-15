import { Component, OnInit } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { HrService } from '../../../service/hr.service';

@Component({
    selector: 'app-gender-chart',
    standalone: true,
    imports: [ChartModule],
    templateUrl: './gender-chart.component.html',
    styleUrl: './gender-chart.component.css'
})
export class GenderChartComponent implements OnInit {

    data: any;

    options: any;

    labels: string[] =[];
    count: string[] = [];
    percentage: string[] = [];

    constructor(private hrService : HrService){}

    ngOnInit() {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');

        // this.data = {
        //     labels: ['Female', 'Male'],
        //     datasets: [
        //         {
        //             data: [50,55],
        //             backgroundColor: ['rgb(227, 61, 148)','rgb(74, 95, 255)'],
        //             hoverBackgroundColor: ['rgb(238, 130, 238)','rgb(137, 196, 244)']
        //         }
        //     ]
        // };
        this.hrService.getGenderStat().subscribe({
            next:(res)=>{
                this.labels=res.gender;
                this.count=res.count;
                this.percentage=res.percentage;

                this.data = {
                    labels: this.labels,
                    datasets: [
                        {
                            data: this.count,
                            backgroundColor: ['rgb(227, 61, 148)','rgb(74, 95, 255)'],
                            hoverBackgroundColor: ['rgb(238, 130, 238)','rgb(137, 196, 244)']
                        }
                    ]
                };
            }
        })


            this.options = {
            cutout: '60%',
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            }
        };
    }

}
