const { success, failed } = require('../helper/response')
const recipeModel = require('../models/recipes.models')

const recipeController = {
  createRecipe: (req, res) => {
    try {
      const { title, ingredients, video } = req.body
      if (!title) {
        throw Error('Title harus diisi')
      }
      if (!ingredients) {
        throw Error('Ingredients harus diisi')
      }
      const userID = req.APP_DATA.tokenDecoded.id
      let image = req.file.filename
      if (!image) {
        image = null
      }
      recipeModel.createRecipe(image, title, ingredients, video, userID)
        .then((result) => {
          success(res, null, 'success', 'sukses menambahkan resep!')
        })
        .catch((err) => {
          let detail = err.detail
          if (!detail) {
            detail = err.hint
          }
          console.log(err)
          failed(res, null, 'error model', detail)
        })
    } catch (err) {
      failed(res, err.message, 'error', 'an error has occured')
    }
  },
  recipeList: async (req, res) => {
    try {
      const { sortField, sortType, page, limit } = req.query
      const field = sortField || 'title'
      const type = sortType === 'DESC' ? sortType : 'ASC'
      const getPage = page ? Number(page) : 1
      const limitPage = limit ? Number(limit) : 6
      const offset = (getPage - 1) * limitPage
      const allData = await recipeModel.allData()
      const totalData = Number(allData.rows[0].total)
      const name = req.query.name || ''
      recipeModel.recipeList(field, type, limitPage, offset, name)
        .then((result) => {
          const pagination = { page: getPage, data_perPage: limitPage, total_data: totalData }
          success(res, result.rows, 'success', 'get recipe success', pagination)
        })
        .catch((err) => {
          failed(res, err, 'error', 'an error has occured')
        })
    } catch (err) {
      failed(res, err, 'error', 'an error has occured')
    }
  },
  myRecipe: (req, res) => {
    try {
      const userID = req.APP_DATA.tokenDecoded.id
      recipeModel.myRecipe(userID)
        .then((result) => {
          success(res, result.rows, 'success', 'get recipe successfully')
        })
        .catch((err) => {
          failed(res, err, 'error', '1an error occured')
        })
    } catch (err) {
      failed(res, err, 'error', '2an error occured')
    }
  },
  updateRecipe: (req, res) => {
    try {
      const id = req.params.id
      const { title, ingredients, video } = req.body
      const userID = req.APP_DATA.tokenDecoded.id
      const image = req.file.filename

      if (!id) {
        throw Error('ID harus dikirim')
      }
      if (!title) {
        throw Error('Title harus dikirim')
      }
      if (!ingredients) {
        throw Error('Ingredients harus dikirim')
      }
      recipeModel.checkAuthor(id)
        .then((result) => {
          if (result.rowCount > 0) {
            if (result.rows[0].user_id === userID) {
              recipeModel.updateRecipe(id, image, title, ingredients, video, userID)
                .then((result) => {
                  success(res, null, 'success', 'update data recipe sukses!')
                })
                .catch((err) => {
                  failed(res, err, 'error', 'an error has occured')
                })
            } else {
              failed(res, null, 'error', 'forbidden')
            }
          } else {
            failed(res, 'data not found', 'error', 'resep tidak ditemukan')
          }
        })
        .catch((err) => {
          failed(res, err, 'error', 'an error has occured')
        })
    } catch (err) {
      failed(res, null, 'error', err.message)
    }
  },
  deleteRecipe: async (req, res) => {
    try {
      const { id } = req.params;
      const checkId = await recipeModel.checkAuthor(id);

      if (checkId.rows.length < 1) {
        return failed(res, 404, 'failed', `Data by id ${id} not found !`);
      }

      if (req.APP_DATA.tokenDecoded.id !== checkId.rows[0].user_id) {
        return failed(res, 403, 'failed', `You don't have access to this page`);
      }

      const file = checkId.rows[0].image;
      if (file) {
        deleteFile(`public/uploads/recipe/${file}`);
      }

      const result = await recipeModel.deleteRecipe(id);
      return success(res, 200, 'success', `Success delete recipe id ${id}`);
    } catch (error) {
      return failed(res, 400, 'failed', `Bad Request : ${error.message}`);
    }
  },
  // deleteRecipe: (req, res) => {
  //   try {
  //     const userID = req.APP_DATA.tokenDecoded.id
  //     const id = req.params.id
  //     if (!id) {
  //       throw Error('ID harus diisi')
  //     }
  //     recipeModel.checkAuthor(id)
  //       .then((result) => {
  //         if (result.rowCount > 0) {
  //           if (result.rows[0].user_id === userID) {
  //             recipeModel.deleteRecipe(id)
  //               .then((result) => {
  //                 success(res, null, 'success', 'resep berhasil dihapus!')
  //               })
  //               .catch((err) => {
  //                 failed(res, err, 'error', 'an error has occured')
  //               })
  //           } else {
  //             failed(res, null, 'error', 'you are not the author')
  //           }
  //         } else {
  //           failed(res, 'data not found', 'error', 'resep tidak ditemukan')
  //         }
  //       })
  //       .catch((err) => {
  //         failed(res, err, 'error', 'an error has occured')
  //       })
  //   } catch (err) {
  //     failed(res, null, 'error', err.message)
  //   }
  // },
  showNewRecipe: (req, res) => {
    try {
      recipeModel.showNewRecipe()
        .then((result) => {
          success(res, result.rows, 'success', 'mendapatkan resep terbaru berhasil!')
        })
        .catch((err) => {
          failed(res, err, 'error', 'an error has occured')
        })
    } catch (err) {
      failed(res, err, 'error', 'an error has occured')
    }
  },
  showRecipeById: (req, res) => {
    try {
      const id = req.params.id
      recipeModel.showRecipeById(id)
        .then((result) => {
          if (result.rowCount > 0) {
            success(res, result.rows, 'success', 'mendapatkan resep berdasarkan id berhasil!')
          } else {
            failed(res, null, 'error', 'resep tidak ditemukan')
          }
        })
        .catch((err) => {
          failed(res, err, 'error', 'an error has occured')
        })
    } catch (err) {
      failed(res, null, 'error', err.message)
    }
  }
}
module.exports = recipeController
