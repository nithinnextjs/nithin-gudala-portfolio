<template>
  <div v-if="isVisible" class="modal-overlay">
    <div class="modal-content">
      <!-- Modal Header with Close Icon -->
      <div class="modal-header">
        <h3 class="modal-title">Job details</h3>
        <button class="close-btn" @click="close">
          &times; <!-- Close icon -->
        </button>
      </div>

      <!-- Modal Body (Content) -->
      <div class="modal-body">
        <slot></slot> <!-- Content passed to the modal -->
      </div>

      <!-- Modal Footer -->
      <div class="modal-footer">
        <button class="footer-btn" @click="close">Close</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isVisible: Boolean,
  },
  methods: {
    close() {
      this.$emit('close');
    },
  },
};
</script>

<style scoped>
/* Modal Overlay */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

/* Modal Content */
.modal-content {
  background-color: white;
  border-radius: 8px;
  width: 50%; /* Medium size */
  max-width: 600px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
}

/* Modal Header */
.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

.modal-title {
  font-size: 1.5em;
  margin: 0;
}

.close-btn {
  background: none;
  border: none;
  font-size: 1.5em;
  cursor: pointer;
  color: #333;
}

.close-btn:hover {
  color: #d9534f; /* Red color on hover */
}

/* Modal Body */
.modal-body {
  padding: 20px;
  max-height: 400px;
  overflow-y: auto;
  font-size: 1em;
}

/* Modal Footer */
.modal-footer {
  padding: 10px;
  border-top: 1px solid #ddd;
  text-align: right;
}

.footer-btn {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.footer-btn:hover {
  background-color: #0056b3;
}
</style>
