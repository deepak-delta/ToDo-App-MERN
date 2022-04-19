/**
 * @swagger
 * tags:
 *   name: User API
 *   description: List of User API
 */

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Creates a new user
 *     tags: [User API]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             example:
 *               name: John
 *               email: john@gmail.com
 *               password: 1234abc
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               example:
 *                 _id: 6256915e3e2816045ab14b12
 *                 token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNWU1ZWIxNTU0OTYwZTM5YTQyMDEyNiIsImlhdCI6MTY1MDM1MTc5MywiZXhwIjoxNjUyOTQzNzkzfQ.61HSXWQoeRSS-lYtzNfxg-3ELKrqxrDXDW0DgKNaGkw
 *       400:
 *         description: Bad Request
 *         content:
 *           application/json:
 *             schema:
 *               example:
 *                 message: Bad Request
 */

/**
 * @swagger
 * /api/users/login:
 *   post:
 *     summary: Login user
 *     tags: [User API]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             example:
 *               email: john@gmail.com
 *               password: 1234abc
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               example:
 *                 _id: 6256915e3e2816045ab14b12
 *                 token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNWU1ZWIxNTU0OTYwZTM5YTQyMDEyNiIsImlhdCI6MTY1MDM1MTc5MywiZXhwIjoxNjUyOTQzNzkzfQ.61HSXWQoeRSS-lYtzNfxg-3ELKrqxrDXDW0DgKNaGkw
 *       400:
 *         description: Bad Request
 *         content:
 *           application/json:
 *             schema:
 *               example:
 *                 message: Bad Request
 */

/**
 * @swagger
 * /api/users/me:
 *   get:
 *     summary: Get current user data
 *     tags: [User API]
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               example:
 *                 id: 6256915e3e2816045ab14b12
 *                 name: John
 *       400:
 *         description: Bad Request
 *         content:
 *           application/json:
 *             schema:
 *               example:
 *                 message: Bad Request
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               example:
 *                 message: Unauthorized, No token provided
 */
/**
 * @swagger
 * tags:
 *   name: ToDo API
 *   description: List of ToDo API
 */

/**
 * @swagger
 * /api/todo:
 *   get:
 *     summary: Returns all todos for the current user
 *     tags: [ToDo API]
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               example:
 *                 _id: 6256915e3e2816045ab14b12
 *                 user: 6256658a1f1d68eb520caa14
 *                 text: Task one
 *                 createdAt: 2022-04-13T09:01:18.721Z
 *                 updatedAt: 2022-04-13T09:09:25.076Z
 *
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               example:
 *                 message: Unauthorized, No token provided
 */

/**
 * @swagger
 * /api/todo:
 *   post:
 *     summary: Creates a new todo
 *     tags: [ToDo API]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             example:
 *               text: Task one
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               example:
 *                 _id: 6256915e3e2816045ab14b12
 *                 user: 6256658a1f1d68eb520caa14
 *                 text: Task one
 *                 createdAt: 2022-04-13T09:01:18.721Z
 *                 updatedAt: 2022-04-13T09:09:25.076Z
 *
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               example:
 *                 message: Unauthorized, No token provided
 *       400:
 *         description: Bad Request
 *         content:
 *           application/json:
 *             schema:
 *               example:
 *                 message: Bad Request
 */

/**
 * @swagger
 * /api/todo/{id}:
 *  put:
 *    summary: Update the todo with the given id
 *    tags: [ToDo API]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The id of the todo to update
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            example:
 *              text: Task one
 *    responses:
 *      200:
 *        description: The book was updated
 *        content:
 *          application/json:
 *            schema:
 *              example:
 *                _id: 6256915e3e2816045ab14b12
 *                user: 6256658a1f1d68eb520caa14
 *                text: Task one
 *                createdAt: 2022-04-13T09:01:18.721Z
 *                updatedAt: 2022-04-13T09:09:25.076Z
 *      404:
 *        description: Not Found
 *      401:
 *        description: Unauthorized
 */

/**
 * @swagger
 * /api/todo/{id}:
 *   delete:
 *     summary: Deletes the todo with the given id
 *     tags: [ToDo API]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The id of the todo to delete
 *
 *     responses:
 *       200:
 *         description: The todo was deleted
 *         content:
 *           application/json:
 *             schema:
 *               example:
 *                 id: 625d6d04401aaf51f9e678f7
 *       404:
 *         description: Not Found
 *       401:
 *         description: Unauthorized
 */
