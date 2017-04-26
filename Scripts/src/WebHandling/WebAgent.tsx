import axios, { AxiosRequestConfig, AxiosPromise } from 'axios';
import iWebAgent = require('./IWebAgent');

export class WebAgent implements iWebAgent.IWebAgent
{
    Get(url: string, successCallback: (responseJson: any) => void): void
    {
        axios.get(url)
            .then(function (axiosResponse)
            {
                successCallback(axiosResponse.data)
            })
            .catch(function (error)
            {
                console.log(error)
            });
    }
}
