import { ProxyState } from "../AppState.js"
import { imagesService } from "../Services/ImagesService.js"


function _drawBackground() {
  const background = ProxyState.images
  console.log('images', background.Template)
  document.body.style.background = `url(${background.Template})` 
  document.getElementById("body").style.backgroundSize = "cover";
}


async function _getImages() {
  try {
    await imagesService.getApiImages()
  } catch (error) {
    console.error(error)
  }
}
export class ImagesController{
  constructor() {
    ProxyState.on('images', _drawBackground)
    _getImages()
  }

}