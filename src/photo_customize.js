import styles from './scss/index.scss'
import "./inserted_scss/dropzone.scss";



require('bootstrap')

import Dropzone from '../node_modules/dropzone/dist/dropzone.js'


/**
 * see https://www.dropzonejs.com/#config-createImageThumbnails
 * and https://stackoverflow.com/questions/39165242/use-dropzone-without-auto-uploading
 */
const myDropzone = new Dropzone('form#photo-upload-form', {autoProcessQueue:false, url: files => {return false}, init: function (e){
    let dropzone = this;
    $('#upload-confirm-button').on('click', function(){
        dropzone.processQueue();
    })
    },
    accept: (file, done)=>{
        // modal('#exampleModal')

        done()
    }, maxFilesize: 1, acceptedFiles:'image/*', thumbnailHeight: null, thumbnailWidth: null})


$ = require('jquery')
const classNames = require('classnames/bind')
const cx = classNames.bind(styles)
const customContent = $('#photo-customizer-content')

/**
 * transform the classes of an element and all its descendants to our scoped css
 */
function convert(selector, filter = false, descend = true) {

    const $element = $(selector)

    function apply_filter(element) {
        const $element = $(element)

        const newClassList = []
        if ($element.attr("class")) {
            $element.attr("class").split(/\s+/).forEach(e => {
                if (filter && !filter.includes(e)) {
                    newClassList.push(e)
                } else {
                    newClassList.push(cx(e))
                }
            })
            $element.attr("class", newClassList.join(' '))
        }


    }

    apply_filter(selector)
    if (descend) {
        $.each($element.find('*'), function (index, element) {
            apply_filter(element)
        })
    }

}

function modal(selector){
    const body = $('body')
    if (body.hasClass(cx('modal-open'))){
        body.removeClass(cx('modal-open'))
        body.children('.'+cx('modal-backdrop')).remove()
        $(selector).removeClass(cx('show'))
    }
    else{
        $(selector).modal('show')
        convert(selector, ['show'], false)
        convert('body', ['modal-open'], false)
        convert('.modal-backdrop', ['modal-backdrop', 'show'], false)
    }

}

convert(customContent)
const exampleModal = $('#exampleModal')
exampleModal.appendTo('body')
exampleModal.on('hidden.bs.modal', ()=>{
    modal(exampleModal)
})


$("#personalize-button").on('click', () => {
    modal('#exampleModal')
})




customContent.show()

// console.log(styles.greenshit)
//
// const src = $zoomImg.attr('src')
//
//
// if (src){
//     console.log(`source is: ${src}`)
//     console.log('script tag insertion from Shuyu Zhao :)')
//
// }
// $zoomImg.insertAfter("<h1>Test test test</h1>")

