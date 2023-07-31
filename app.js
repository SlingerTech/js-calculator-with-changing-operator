let totalOperation = jQuery("#total-operations")
let changeOperator = jQuery("#dynamic-operators")
let inputOne = jQuery("#input-one")
let inputTwo = jQuery("#input-two")
let plus = jQuery("#plus")
let minus = jQuery("#minus")
let multiply = jQuery("#multiply")
let divide = jQuery("#divide")
let allOperationButton = jQuery(".operation-buttons")
let resetValues = jQuery("#reset-inputs")
let finalResult = jQuery("#final-result")

// disable buttons
allOperationButton.attr("disabled", true)

// enable operators
function checkInputs() {
    let inputOneValue = inputOne.val();
    let inputTwoValue = inputTwo.val();

    if (inputOneValue === '' || inputTwoValue === '') {
        allOperationButton.attr("disabled", true);
    } else {
        allOperationButton.attr("disabled", false);
    }
}

// Run checkInput function on value change
inputOne.on('input', checkInputs);
inputTwo.on('input', checkInputs);

// Get operation button's signs and update in between inputs
allOperationButton.click(function() {
    let operationIcon = jQuery(this).text();
    changeOperator.text(operationIcon)

    // Count total operations
    let currentValue = parseInt(totalOperation.text())
    totalOperation.text(currentValue + 1)
})

// reset values
resetValues.click(function(){
    inputOne.val('')
    inputTwo.val('')
    finalResult.text(0)
    allOperationButton.attr("disabled", true)
})

// plus values
plus.click(function(){
    let inputOneValue = parseInt(inputOne.val())
    let inputTwoValue = parseInt(inputTwo.val())
    let result = inputOneValue + inputTwoValue
    finalResult.text(result)
})

// minus values
minus.click(function(){
    let inputOneValue = parseInt(inputOne.val())
    let inputTwoValue = parseInt(inputTwo.val())
    let result = inputOneValue - inputTwoValue
    finalResult.text(result)
})

// multiply values
multiply.click(function(){
    let inputOneValue = parseInt(inputOne.val())
    let inputTwoValue = parseInt(inputTwo.val())
    let result = inputOneValue * inputTwoValue
    finalResult.text(result)
})

// divide values
multiply.click(function(){
    let inputOneValue = parseFloat(inputOne.val())
    let inputTwoValue = parseFloat(inputTwo.val())
    let result = inputOneValue / inputTwoValue
    finalResult.text(result)
})