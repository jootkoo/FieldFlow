import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Navbar } from "../../components/navbar/navbar";

// This is the jobs component, which allows users to view and manage their jobs. 
// It provides a simple and intuitive interface for users to access their job data and make informed decisions about their projects.
@Component({
  standalone: true,
  selector: 'jobs',
  imports: [CommonModule, FormsModule, Navbar],
  templateUrl: './jobs.html',
  styleUrls: ['./jobs.css']
})
export class Jobs {
  private router = inject(Router);
  //Job properties
  jobName: string = '';
  client: string = '';
  status: string = '';
  jobsList: { jobName: string, client: string, status: string }[] = [];
  //null = null, otherwise it holds the index of the job being edited
  editingIndex: number | null = null;
  editJobName: string = '';
  editClient: string = '';
  editStatus: string = '';

  // Add job
  addJob() {
    //checks if the job name, client, and status are not empty 
    //then adds the job to the jobsList array and resets the input fields.
    if (this.jobName && this.client && this.status) {
      this.jobsList.push({
        jobName: this.jobName,
        client: this.client,
        status: this.status
      });
      // This is the job data that would be sent to the backend to save it in the database
      const jobData = {
        jobName: this.jobName,
        client: this.client,
        status: this.status
      };
      //send jobData to the backend to save it in the database
    }
  }

  // Start editing a job
  startEdit(index: number) {
    this.editingIndex = index;
    this.editJobName = this.jobsList[index].jobName;
    this.editClient = this.jobsList[index].client;
    this.editStatus = this.jobsList[index].status;
  }

  //save edited job
  saveEdit(index: number) {
    //checks if the edited job name, client, and status are not empty
    if (this.editJobName && this.editClient && this.editStatus) {
      this.jobsList[index] = {
        jobName: this.editJobName,
        client: this.editClient,
        status: this.editStatus
      };

      const updatedJobData = {
        jobName: this.editJobName,
        client: this.editClient,
        status: this.editStatus
      };
      //send the updated job data to the backend to save it in the database

      this.editingIndex = null;
      this.editJobName = '';
      this.editClient = '';
      this.editStatus = '';
    }
  }

  //cancel editing
  cancelEdit() {
    this.editingIndex = null;
    this.editJobName = '';
    this.editClient = '';
    this.editStatus = '';
  }

  // Remove job
  removeJob(index: number) {
    this.jobsList.splice(index, 1);
    //send a request to the backend to remove the job from the database
  }
}