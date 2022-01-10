import { ProxyState } from "../AppState.js"
import { Image } from "../Models/Image.js"
import { sandboxApi } from "./AxiosService.js"

class ImagesService{
  async getApiImages() {
    const res = await sandboxApi.get('imageddddeddsds')
    console.log(res.data)
    ProxyState.images = new Image(res.data)
  }

}

export const imagesService = new ImagesService()