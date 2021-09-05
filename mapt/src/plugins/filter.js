import Vue from 'vue';



Vue.filter('toDateTime', timestamp => {
    return new Date(timestamp).toLocaleString();
});

Vue.filter('toLocaleDate', timestamp => {
    var date = new Date(timestamp)
    return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
});

Vue.filter('toDouble', value => {
    return value / 100;
});


Vue.filter('toRoundOff4', value => {
    if (isNaN(value)) return "NaN"
    const options = {
        minimumFractionDigits: 4,
        maximumFractionDigits: 4
    };
    var formatted = Number(value).toLocaleString('en', options);
    return formatted
});


Vue.filter('toRoundOff2', value => {
    if (isNaN(value)) return "NaN"
    const options = {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    };
    var formatted = Number(value).toLocaleString('en', options);
    return formatted
});

Vue.filter('toGender', value => {
    if (isNaN(value)) return "NaN"
  
    if (value == 0) return "Female"
    if (value == 1) return "Male"
});

Vue.filter('toWhole', value => {
    if (isNaN(value)) return "NaN"

    return Math.ceil(value)
});

Vue.filter('toInitials', function (value) {

    if (!value) return ''

    var name = String(value)

    console.log(value);

    var initials = name.match(/(^\S\S?|\b\S)?/g).join("").match(/(^\S|\S$)?/g).join("").toUpperCase()

    console.log(initials);

    return initials
})

Vue.filter('capitalize', function (value) {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
});

Vue.filter('capitalizeAll', function (value) {
    if (!value) return ''
    value = value.toString()
    return value.replace(/(^\w{1})|(\s{1}\w{1})/g, match => match.toUpperCase());
});


Vue.filter('hideName', function (value) {
    if (!value) return ''
    value = value.substring(value.length - 7, value.length)
    return value.replace(/.(?=.{4})/g, "*");
    // return value.replace( /\w(?=\w{4})/g, "*");
});

Vue.filter('hideNumber', function (value) {
    if (!value) return ''
    value = value.toString()
    value = value.substring(value.length - 7, value.length)
    return value.replace(/.(?=.{4})/g, "*");
});

Vue.filter('toOrderStatus', function (value) {
    if (value == 0) return 'Order Placed'
    if (value == 1) return 'ToPrepare'
    if (value == 2) return 'ToPickUp'
    if (value == 3) return 'ToShip'
    if (value == 4) return 'ToReceive'
    if (value == 5) return 'Received'
    if (value == 6) return 'ToReturn'
    if (value == 7) return 'Cancelled'
    if (value == 8) return 'Completed'
});

Vue.filter('toYesNo', function (value) {
    if (value == 0) return 'No'
    if (value == 1) return 'Yes'
});
export default Vue
