app.delete("/user/:id", async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization as string;
  
      const authenticationData = getData(token);
  
      if (authenticationData.role !== "admin") {
        throw new Error("Only a admin user can access this funcionality");
      }
  
      const id = req.params.id;
  
      await deleteUser(id);
  
      res.sendStatus(200);
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  });