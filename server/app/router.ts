import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  /**
   * File conversion
   */
  router.get('/fileConversion', controller.file.conversion);

  /**
   * Upload File
   */
  router.post('/upload',controller.file.upload)
};
