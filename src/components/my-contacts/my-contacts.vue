<template>
    <div class="container mt-5">
      <h2 class="text-center">My Contacts Views</h2>
      <!-- Table of contacts -->
      <table class="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(profile, index) in paginatedProfiles" :key="profile._id">
            <td>{{ index + 1 }}</td>
            <td>{{ profile.firstname }}</td>
            <td>{{ profile.lastname }}</td>
            <td>{{ profile.Email }}</td>
            <td>{{ profile.Phonenumber }}</td>
            <td>
              <button class="btn btn-warning btn-sm" @click="openEditModal(profile)">Edit</button>
              <button class="btn btn-danger btn-sm" @click="openDeleteModal(profile)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
  
      <!-- Pagination -->
      <nav aria-label="Page navigation">
        <ul class="pagination justify-content-center">
          <li class="page-item" :class="{ disabled: currentPage === 1 }">
            <a class="page-link" @click="changePage(currentPage - 1)" href="#">Previous</a>
          </li>
          <li class="page-item" :class="{ active: currentPage === page }" v-for="page in totalPages" :key="page">
            <a class="page-link" @click="changePage(page)" href="#">{{ page }}</a>
          </li>
          <li class="page-item" :class="{ disabled: currentPage === totalPages }">
            <a class="page-link" @click="changePage(currentPage + 1)" href="#">Next</a>
          </li>
        </ul>
      </nav>
  
      <!-- Edit Modal -->
      <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="editModalLabel">Edit Contact</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form @submit.prevent="updateProfile">
                <div class="mb-3">
                  <label for="fristname" class="form-label">First Name</label>
                  <input type="text" v-model="editProfile.fristname" class="form-control" id="fristname" required />
                </div>
                <div class="mb-3">
                  <label for="lastname" class="form-label">Last Name</label>
                  <input type="text" v-model="editProfile.lastname" class="form-control" id="lastname" required />
                </div>
                <div class="mb-3">
                  <label for="Email" class="form-label">Email</label>
                  <input type="email" v-model="editProfile.Email" class="form-control" id="Email" />
                </div>
                <div class="mb-3">
                  <label for="Phonenumber" class="form-label">Phone Number</label>
                  <input type="text" v-model="editProfile.Phonenumber" class="form-control" id="Phonenumber" />
                </div>
                <button type="submit" class="btn btn-primary">Save changes</button>
              </form>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Delete Confirmation Modal -->
      <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="deleteModalLabel">Confirm Deletion</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              Are you sure you want to delete this contact?
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
              <button type="button" class="btn btn-danger" @click="deleteProfile">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        profiles: [],
        currentPage: 1,
        profilesPerPage: 5,
        editProfile: {},
        profileToDelete: null,
      };
    },
    computed: {
      totalPages() {
        return Math.ceil(this.profiles.length / this.profilesPerPage);
      },
      paginatedProfiles() {
        const start = (this.currentPage - 1) * this.profilesPerPage;
        return this.profiles.slice(start, start + this.profilesPerPage);
      },
    },
    methods: {
      async fetchProfiles() {
        try {
          const response = await fetch('https://backend-portfolio-7hdl.onrender.com/getprofiles');
          const data = await response.json();
          this.profiles = data;
        } catch (err) {
          console.error('Error fetching profiles:', err);
        }
      },
      changePage(page) {
        if (page > 0 && page <= this.totalPages) {
          this.currentPage = page;
        }
      },
      openEditModal(profile) {
        this.editProfile = { ...profile };
        const editModal = new window.bootstrap.Modal(document.getElementById('editModal'));
        editModal.show();
      },
      async updateProfile() {
        try {
          const response = await fetch(`https://backend-portfolio-7hdl.onrender.com/updateprofiles/${this.editProfile._id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.editProfile),
          });
          const updatedProfile = await response.json();
          this.profiles = this.profiles.map(profile => 
            profile._id === updatedProfile._id ? updatedProfile : profile
          );
          const editModal = new window.bootstrap.Modal(document.getElementById('editModal'));
          editModal.hide();
        } catch (err) {
          console.error('Error updating profile:', err);
        }
      },
      openDeleteModal(profile) {
        this.profileToDelete = profile;
        const deleteModal = new window.bootstrap.Modal(document.getElementById('deleteModal'));
        deleteModal.show();
      },
      async deleteProfile() {
        try {
          await fetch(`https://backend-portfolio-7hdl.onrender.com/deleteprofiles/${this.profileToDelete._id}`, {
            method: 'DELETE',
          });
          this.profiles = this.profiles.filter(profile => profile._id !== this.profileToDelete._id);
          const deleteModal = new window.bootstrap.Modal(document.getElementById('deleteModal'));
          deleteModal.hide();
        } catch (err) {
          console.error('Error deleting profile:', err);
        }
      },
    },
    mounted() {
      this.fetchProfiles();
    },
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 900px;
  }
  </style>
  