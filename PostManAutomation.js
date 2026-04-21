// Function to Check Expected Status Code
pm.test(" Status Code is 200", function () {
    pm.response.to.have.status(200);
});

// Function to Check Expected Response Time
pm.test("Expected Response time is less than 2000ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(2000);
});

// Function to Check Expected JSON Structure
pm.test("Response has results array", function () {
    const jsonData = pm.response.json();
    pm.expect(jsonData).to.have.property("results");
});

// Validate Additional Fields in the Returned Response 
pm.test("Array has Expected Assertion Fields", function () {
    const user = pm.response.json().results[0];
    pm.expect(user).to.have.property("email");
    pm.expect(user).to.have.property("name");
    pm.expect(user).to.have.property("login");
});

// Function to Validate Specified Number of Users
pm.test("The Expected Count is 10", function () {
    const jsonData = pm.response.json();
    pm.expect(jsonData.results.length).to.eql(10);
});
