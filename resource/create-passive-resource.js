export default function() {
    // console.log('passive');
    $('#didactician-form-active-select').removeClass('active');
    $('#didactician-form-passive-select').addClass('active');
    $('#didactician-create-active-form').addClass('hidden');
    $('#didactician-create-passive-form').removeClass('hidden');
}