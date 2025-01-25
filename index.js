// Welcome Message
// This function displays a greeting message with the current date.
const welcomeMessage = () => {
    // Get today's date in a readable string format (e.g., "Fri Jan 25 2025")
    const today = new Date().toDateString();
  
    // Update the content of the element with ID 'welcomeMessage'
    document.getElementById('welcomeMessage').textContent = `🤸🏾‍♀️ Welcome to Your Fitness Tracker 🥗 Today is ${today}`;
  };
  // Call the function to display the message on page load
  welcomeMessage();
  
  // Display Workout Routine
  // This function handles adding workouts to a list when the user submits a workout
  const displayWorkoutRoutine = () => {
    // Get the workout input value
    const workoutInput = document.querySelector('#workoutInput').value;
  
    // Check if the input is empty and alert the user if it is
    if (workoutInput.trim() === '') {
      alert('Please enter a workout!');
      return; // Exit the function if the input is invalid
    }
  
    // Get the workout list element
    const workoutList = document.querySelector('#workoutList');
  
    // Create a new list item (li) element
    const newWorkout = document.createElement('li');
  
    // Set the text of the new list item to the workout input
    newWorkout.textContent = workoutInput;
  
    // Add the new workout to the workout list
    workoutList.appendChild(newWorkout);
  
    // Clear the workout input field after adding the workout
    document.querySelector('#workoutInput').value = '';
  };
  
  // Attach a click event listener to the submit button for workouts
  document.querySelector('#submitWorkout').addEventListener('click', displayWorkoutRoutine);
  
  // Add New Fitness Goal
  // This function handles adding new goals to a list while preventing duplicates
  const addNewGoal = () => {
    // Get the goal input value and trim any extra spaces
    const goalInput = document.querySelector('#goalInput').value.trim();
  
    // Get the goal list element
    const goalList = document.querySelector('#goalList');
  
    // Check if the input is empty and alert the user if it is
    if (!goalInput) {
      alert('Please enter a goal!');
      return; // Exit the function if the input is invalid
    }
  
    // Get the existing goals in the list and check if the new goal already exists
    const existingGoals = Array.from(goalList.children).map(item => item.textContent);
    if (existingGoals.includes(goalInput)) {
      alert('This goal already exists!');
      return; // Exit the function if the goal is a duplicate
    }
  
    // Create a new list item (li) element for the goal
    const newGoal = document.createElement('li');
    newGoal.textContent = goalInput;
  
    // Add a click event listener to the new goal to remove it when clicked
    newGoal.addEventListener('click', () => goalList.removeChild(newGoal));
  
    // Add the new goal to the goal list
    goalList.appendChild(newGoal);
  
    // Clear the goal input field after adding the goal
    document.querySelector('#goalInput').value = '';
  };
  
  // Attach a click event listener to the submit button for goals
  document.querySelector('#submitGoal').addEventListener('click', addNewGoal);
  
  // Water Intake Tracker
  // This variable keeps track of the number of glasses of water consumed
  let waterIntake = 0;
  
  // This function updates the water intake count and displays it
  const updateWaterIntake = (change) => {
    // Increase or decrease the water intake based on the 'change' parameter
    waterIntake += change;
  
    // Ensure the water intake does not go below zero
    if (waterIntake < 0) waterIntake = 0;
  
    // Update the displayed water intake count
    document.querySelector('#waterIntakeDisplay').textContent = `${waterIntake} glasses 💦`;
  };
  
  // Attach event listeners to the buttons to increase or decrease water intake
  document.querySelector('#increaseWater').addEventListener('click', () => updateWaterIntake(1));
  document.querySelector('#decreaseWater').addEventListener('click', () => updateWaterIntake(-1));
  
  // Update Progress Charts
  // This function updates the progress messages for workout and calorie tracking
  const updateProgressCharts = () => {
    document.querySelector('#workoutProgress').textContent = "Workout progress updated successfully!";
    document.querySelector('#calorieIntakeProgress').textContent = "Calorie intake progress updated successfully!";
  };
  
  // Call the function to initialize progress messages
  updateProgressCharts();
  
  // Toggle Theme
  // This function toggles the website's theme between light and dark modes
  const toggleTheme = () => {
    // Add or remove the 'dark-theme' class to the <body> element
    document.body.classList.toggle('dark-theme');
  };
  
  // Attach an event listener to the theme toggle button
  document.querySelector('#themeToggle').addEventListener('click', toggleTheme);
  
  // Submit Meal Plan
  // This function handles the submission of the meal plan form
  const submitMealPlan = (event) => {
    // Prevent the default form submission behavior (e.g., page reload)
    event.preventDefault();
  
    // Display a success message to the user
    alert('Meal plan submitted successfully! 🍴');
  };
  
  // Attach an event listener to the meal plan form to handle submission
  document.querySelector('#mealPlanForm').addEventListener('submit', submitMealPlan);
  