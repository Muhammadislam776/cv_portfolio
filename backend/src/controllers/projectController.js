// Project Controller
const Project = require("../models/Project");

exports.getProjects = async (req, res, next) => {
  try {
    const projects = await Project.getAll();
    res.status(200).json({
      success: true,
      count: projects.length,
      data: projects
    });
  } catch (error) {
    next(error);
  }
};

exports.getProjectById = async (req, res, next) => {
  try {
    const project = await Project.getById(req.params.id);
    if (!project) {
      return res.status(404).json({
        success: false,
        error: "Project not found"
      });
    }
    res.status(200).json({
      success: true,
      data: project
    });
  } catch (error) {
    next(error);
  }
};

exports.createProject = async (req, res, next) => {
  try {
    const newProject = await Project.create(req.body);
    res.status(201).json({
      success: true,
      data: newProject
    });
  } catch (error) {
    next(error);
  }
};
