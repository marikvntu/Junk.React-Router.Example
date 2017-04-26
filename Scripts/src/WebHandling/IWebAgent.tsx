export interface IWebAgent
{
    Get(url: string, callback: (responseJson: any) => void ): void;
}