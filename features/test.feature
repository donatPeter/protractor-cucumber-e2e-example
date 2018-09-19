Feature: Test
  First test

  Scenario: Test
    Given open the "https://udemy-react-burger-builder.firebaseapp.com" URL
    When I click on the HTML element with "salad" ID
    And I click on the HTML element with "login-to-order" ID
    Then it navigates to the "https://udemy-react-burger-builder.firebaseapp.com/auth" URL